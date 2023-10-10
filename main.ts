const { app, BrowserWindow } = require("electron");
const path = require("path");

const iconPath =
  process.platform !== "darwin"
    ? "public/images/icons/fav.ico"
    : "public/images/icons/fav.ico";

function createLoadingScreen() {
  const loadingScreen = new BrowserWindow({
    width: 400,
    height: 200,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
    },
    icon: path.join(__dirname, iconPath),
  });

  loadingScreen.loadFile("loading.html");
  return loadingScreen;
}

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 600,
    show: false,
    focusable: false,
    titleBarStyle: 'hidden',
    trafficLightPosition: {
      x: 14,
      y: 8,
    },
    icon: `${__dirname}/public/images/icons/152.png`,
  });

  mainWindow.loadURL(
    process.env.NODE_ENV !== "production"
      ? "http://localhost:3000/dashboard?app=true"
      : process.env.NEXT_PUBLIC_SITE_URL
  );
  //   drag(mainWindow, {
  //     dragArea: 'header'
  //   })
  //   mainWindow.webContents.openDevTools();
  mainWindow.setTitle(process.env.NEXT_PUBLIC_APP_TITLE || "");

  mainWindow.webContents.on("page-title-updated", (event, title) => {
    mainWindow.setTitle(title);
  });

  mainWindow.on("page-title-set", (event, title) => {
    if (title === "") {
      const fallbackTitle = process.env.NEXT_PUBLIC_APP_TITLE || "";
      if (fallbackTitle) {
        mainWindow.setTitle(fallbackTitle);
      }
    }
  });

  return mainWindow;
}

app.whenReady().then(() => {
  const loadingScreen = createLoadingScreen();
  const mainWindow = createMainWindow();

  let loadTime = Date.now();
  let loaded = false;

  mainWindow.on("ready-to-show", () => {
    loaded = true;
    const remainingTime = 3000 - (Date.now() - loadTime);
    setTimeout(
      () => {
        loadingScreen.hide();
        mainWindow.show();
      },
      remainingTime > 0 ? remainingTime : 0
    );
  });

  mainWindow.on("closed", () => {
    app.quit();
  });

  mainWindow.webContents.on("did-finish-load", () => {
    if (!loaded) {
      const remainingTime = 3000 - (Date.now() - loadTime);
      setTimeout(
        () => {
          loadingScreen.hide();
          mainWindow.show();
        },
        remainingTime > 0 ? remainingTime : 0
      );
    }
  });

  // Show the loading screen initially
  loadingScreen.show();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
