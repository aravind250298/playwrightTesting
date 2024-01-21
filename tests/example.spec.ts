import { BrowserContext, ElectronApplication, _electron as electron, test, Page } from '@playwright/test'

let electronApp: ElectronApplication;
let firstWindow: Page;
let context: BrowserContext;

test('electron test1', async () => {
  electronApp = await electron.launch({ executablePath: "C:\\Users\\aravind\\AppData\\Local\\Postman\\app-10.21.0\\Postman.exe" });
  context = electronApp.context();
  await context.tracing.start({ screenshots: true, snapshots: true });
  firstWindow = await electronApp.firstWindow();
  await firstWindow.click("//span[text()='Home']");
  await firstWindow.click("//span[text()='New']");
  await firstWindow.click("//div[text()='HTTP']");
  await context.tracing.stop({path:'tests/tracing/trace.zip'});
  await electronApp.close();
})
