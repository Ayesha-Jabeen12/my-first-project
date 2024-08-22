import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('link', { name: 'Mobiles' }).click();
  await page.getByPlaceholder('Search Amazon.in').fill('apple iphone 15');
  await page.getByRole('button', { name: 'Go' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Apple iPhone 15 Pro Max (1 TB) - Natural Titanium', exact: true }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Add to Cart' }).click();
  await page1.getByLabel('navigation').getByRole('link', { name: 'Go to Cart' }).click();
  await page1.getByLabel('Proceed to Buy Buy Amazon').click();
  await page1.getByLabel('Email or mobile phone number').fill('9876543210');
  await page1.getByLabel('Continue').click();
  await page1.getByLabel('Send OTP').click();
 
});