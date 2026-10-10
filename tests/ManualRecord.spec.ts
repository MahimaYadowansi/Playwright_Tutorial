import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://github.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('mahimayadowansi');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('mahima345');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
  await page.getByRole('button', { name: 'Dismiss this message' }).click();
});