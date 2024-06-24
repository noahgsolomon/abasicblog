import { writeFileSync } from 'node:fs';
import { load } from 'cheerio';
import { fetchPageWithPuppeteer } from './github.js';

function extractCommitDates({ html }) {
  const $ = load(html);
  const commitData = new Map();

  $('td[data-date]').each((index, element) => {
    const date = $(element).attr('data-date');
    const level = parseInt($(element).attr('data-level'));

    if (date && level > 0) {
      const toolTipId = $(element).attr('id');
      const toolTipSelector = `tool-tip[for="${toolTipId}"]`;
      const tooltipText = $(toolTipSelector).text().trim();

      const match = tooltipText.match(/(\d+) contribution/);
      const commitCount = match ? parseInt(match[1]) : 1;

      commitData.set(date, commitCount);
    }
  });

  return commitData;
}

function writeScriptFile({ commitData }) {
  let scriptContent = '';

  commitData.forEach((commitCount, date) => {
    for (let i = 0; i < commitCount; i++) {
      scriptContent += `GIT_COMMITTER_DATE="${date}T00:00:00.000Z" git commit --allow-empty -m "Sync commit for ${date}" --date="${date}T00:00:00.000Z"\n`;
    }
  });

  writeFileSync('script.sh', scriptContent, { encoding: 'utf-8' });
  console.log('The script.sh has been successfully generated.');
}


export async function generateCommitScript({ username, minYear, maxYear }) {
  const commitData = new Map();

  for (let year = minYear; year <= maxYear; year++) {
    const from = `${year}-01-01`;
    const to = `${year}-12-31`;

    const url = `https://github.com/${username}?tab=overview&from=${from}&to=${to}`;
    const pageContent = await fetchPageWithPuppeteer({ url });

    const datesForYear = extractCommitDates({ html: pageContent });
    datesForYear.forEach((count, date) => commitData.set(date, count));
  }

  writeScriptFile({ commitData: commitData });
}
