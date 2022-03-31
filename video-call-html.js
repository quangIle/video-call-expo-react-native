{
  /* <meta http-equiv="X-UA-Compatible" content="ie=edge" /> */
}
export const head = `
<head>
  <meta charset="UTF-8" />  
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dogeller</title>  
  <style type="text/css">
    body {
      margin: 0;
      padding: 0;
      font-family: "Montserrat", sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: #f9fafc;
      color: #595354;
    }

    .header {
      background-color: #ffffff;
      padding: 10px 40px;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
    }

    .header > .logo-container {
      display: flex;
      align-items: center;
    }

    .header > .logo-container > .logo-img {
      width: 60px;
      height: 60px;
      margin-right: 15px;
    }

    .header > .logo-container > .logo-text {
      font-size: 26px;
      font-weight: 700;
    }

    .header > .logo-container > .logo-text > .logo-highlight {
      color: #65a9e5;
    }

    .content-container {
      width: 100%;
      height: calc(100vh - 89px);
      display: flex;
      justify-content: space-between;
      overflow: hidden;
    }

    .active-users-panel {
      width: 300px;
      height: 100%;
      border-right: 1px solid #cddfe7;
    }

    .panel-title {
      margin: 10px 0 0 0;
      padding-left: 30px;
      font-weight: 500;
      font-size: 18px;
      border-bottom: 1px solid #cddfe7;
      padding-bottom: 10px;
    }

    .active-user {
      padding: 10px 30px;
      border-bottom: 1px solid #cddfe7;
      cursor: pointer;
      user-select: none;
    }

    .active-user:hover {
      background-color: #e8e9eb;
      transition: background-color 0.5s ease;
    }

    .active-user--selected {
      background-color: #fff;
      border-right: 5px solid #65a9e5;
      font-weight: 500;
      transition: all 0.5s ease;
    }

    .video-chat-container {
      padding: 0 20px;
      flex: 1;
      position: relative;
    }

    .talk-info {
      font-weight: 500;
      font-size: 21px;
    }

    .remote-video {
      border: 1px solid #cddfe7;
      width: 100%;
      height: 100%;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
    }

    .local-video {
      position: absolute;
      border: 1px solid #cddfe7;
      bottom: 60px;
      right: 40px;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
      border-radius: 5px;
      width: 300px;
    }
  </style>
</head>
`
export const body = `
<body>
  <div class="container">
    <header class="header">
      <div class="logo-container">
        <img src="./img/doge.png" alt="doge logo" class="logo-img" />
        <h1 class="logo-text">
          Doge<span class="logo-highlight">ller</span>
        </h1>
      </div>
    </header>
    <div class="content-container">
      <div class="active-users-panel" id="active-user-container">
        <h3 class="panel-title">Active Users:</h3>
      </div>
      <div class="video-chat-container">
        <h2 class="talk-info" id="talking-with-info">
          Select active user on the left menu.            
        </h2>
        <div class="video-container">
          <video autoplay class="remote-video" id="remote-video"></video>
          <video autoplay muted class="local-video" id="local-video"></video>
        </div>
      </div>
    </div>
  </div>  
</body>
`
export const html = (script) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Dogeller</title>
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./styles.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.js"></script>
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
        font-family: "Montserrat", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #f9fafc;
        color: #595354;
      }

      .header {
        background-color: #ffffff;
        padding: 10px 40px;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
      }

      .header > .logo-container {
        display: flex;
        align-items: center;
      }

      .header > .logo-container > .logo-img {
        width: 60px;
        height: 60px;
        margin-right: 15px;
      }

      .header > .logo-container > .logo-text {
        font-size: 26px;
        font-weight: 700;
      }

      .header > .logo-container > .logo-text > .logo-highlight {
        color: #65a9e5;
      }

      .content-container {
        width: 100%;
        height: calc(100vh - 89px);
        display: flex;
        justify-content: space-between;
        overflow: hidden;
      }

      .active-users-panel {
        width: 300px;
        height: 100%;
        border-right: 1px solid #cddfe7;
      }

      .panel-title {
        margin: 10px 0 0 0;
        padding-left: 30px;
        font-weight: 500;
        font-size: 18px;
        border-bottom: 1px solid #cddfe7;
        padding-bottom: 10px;
      }

      .active-user {
        padding: 10px 30px;
        border-bottom: 1px solid #cddfe7;
        cursor: pointer;
        user-select: none;
      }

      .active-user:hover {
        background-color: #e8e9eb;
        transition: background-color 0.5s ease;
      }

      .active-user--selected {
        background-color: #fff;
        border-right: 5px solid #65a9e5;
        font-weight: 500;
        transition: all 0.5s ease;
      }

      .video-chat-container {
        padding: 0 20px;
        flex: 1;
        position: relative;
      }

      .talk-info {
        font-weight: 500;
        font-size: 21px;
      }

      .remote-video {
        border: 1px solid #cddfe7;
        width: 100%;
        height: 100%;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
      }

      .local-video {
        position: absolute;
        border: 1px solid #cddfe7;
        bottom: 60px;
        right: 40px;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        width: 300px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <header class="header">
        <div class="logo-container">
          <img src="./img/doge.png" alt="doge logo" class="logo-img" />
          <h1 class="logo-text">
            Doge<span class="logo-highlight">ller</span>
          </h1>
        </div>
      </header>
      <div class="content-container">
        <div class="active-users-panel" id="active-user-container">
          <h3 class="panel-title">Active Users:</h3>
        </div>
        <div class="video-chat-container">
          <h2 class="talk-info" id="talking-with-info">
            Select active user on the left menu.            
          </h2>
          <div class="video-container">
            <video autoplay class="remote-video" id="remote-video"></video>
            <video autoplay muted class="local-video" id="local-video"></video>
          </div>
        </div>
      </div>
    </div>
    <script>
      
      window.ReactNativeWebView.postMessage("here")
      ${script}
    </script>
  </body>
</html>
`
