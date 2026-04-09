const fs = require('fs');
const path = require('path');

const reportDir = path.join(__dirname, 'allure-report');
const customScript = path.join(__dirname, 'custom-script.js');
const customStyle = path.join(__dirname, 'custom-style.css');
const assetFiles = ['custom-script.js', 'custom-style.css'];
const skippedDirectories = new Set(['data', 'history', 'widgets']);
const styleTag = '    <link rel="stylesheet" href="custom-style.css">\n';
const scriptTag = '    <script defer src="custom-script.js"></script>\n';

function findReportPages(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const pages = [];

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (skippedDirectories.has(entry.name)) {
        continue;
      }

      pages.push(...findReportPages(entryPath));
      continue;
    }

    if (entry.isFile() && entry.name === 'index.html') {
      pages.push(entryPath);
    }
  }

  return pages;
}

function injectBeforeClosingTag(html, tagName, snippet) {
  const closingTagPattern = new RegExp(`</${tagName}>`, 'i');

  if (!closingTagPattern.test(html)) {
    throw new Error(`Unable to inject ${tagName} customization: closing tag not found.`);
  }

  return html.replace(closingTagPattern, (match) => `${snippet}${match}`);
}

function ensureInjectedMarkup(html) {
  let updated = html;

  if (!updated.includes('custom-style.css')) {
    updated = injectBeforeClosingTag(updated, 'head', styleTag);
  }

  if (!updated.includes('custom-script.js')) {
    updated = injectBeforeClosingTag(updated, 'body', scriptTag);
  }

  return updated;
}

function copyAssets(targetDir) {
  const assetSources = {
    'custom-script.js': customScript,
    'custom-style.css': customStyle,
  };

  for (const assetFile of assetFiles) {
    fs.copyFileSync(assetSources[assetFile], path.join(targetDir, assetFile));
  }
}

if (!fs.existsSync(reportDir)) {
  throw new Error(`Report directory not found: ${reportDir}`);
}

const reportPages = findReportPages(reportDir);
const copiedAssetDirs = new Set();

for (const reportPage of reportPages) {
  const reportPageDir = path.dirname(reportPage);
  const html = fs.readFileSync(reportPage, 'utf8');
  const updatedHtml = ensureInjectedMarkup(html);

  if (!copiedAssetDirs.has(reportPageDir)) {
    copyAssets(reportPageDir);
    copiedAssetDirs.add(reportPageDir);
  }

  if (updatedHtml !== html) {
    fs.writeFileSync(reportPage, updatedHtml);
  }
}

console.log(`Customized ${reportPages.length} report page(s).`);
