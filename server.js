var express = require("express");
var zip = require("express-zip");
var app = express();
var mime = require("mime");
var fs = require("fs");
const PORT = 9999;
const path = require("path");
const e = require("express");

app.use(express.json());

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const renderNavigation = (req, res, next) => {
  req.nav = `
    <div class="nik_skinner_link_wrapper">
        <a class="nik_skinner_link" href="/sportWeb">sport web</a>
        <a class="nik_skinner_link" href="/sportMobile">sport mobile</a>
        <a class="nik_skinner_link" href="/sportRules">sport rules</a>
    </div>
    `;
  next();
};

app.use(renderNavigation);

const renderMobileView = (req, res) => {
  res.render("sportMobile", {
    nav: req.nav,
  });
};

const renderWebView = (req, res) => {
  res.render("sportWeb", {
    nav: req.nav,
  });
};

const renderRules = (req, res) => {
  res.render("sportRules", {
    nav: req.nav,
  });
};

app.get("/", (req, res) => {
  // renderWebView();
  res.redirect("/sportWeb");
}
);
app.get("/sportMobile", renderMobileView);
app.get("/sportWeb", renderWebView);
app.get("/sportRules", renderRules);

app.post("/req/:id", (req, res) => {
  let id = req.params.id;
  let css = req.body.css;
  let js = req.body.js;
  // let scss = req.body.scss;

  var writeCss = fs.createWriteStream(`${id}.css`);
  writeCss.write(css);
  res.setHeader("Content-Type", "text/css");
  writeCss.end();

  if (js) {
    var writeJs = fs.createWriteStream(`${id}.js`);
    writeJs.write(js);
    res.setHeader("Content-Type", "text/javascript");
    writeJs.end();
  }

  res.status(200).json({ OK: true });
});

app.get("/download/:id", function (req, res) {
  let id = req.params.id;

  const cssFile = `${__dirname}/${id}.css`;
  // const scssFile = `${__dirname}/${id}.scss`;
  const jsFile = `${__dirname}/${id}.js`;

  if (id === "sportMobile") {
    res.zip([
      { path: cssFile, name: `${id}.css` },
      { path: jsFile, name: `${id}.js` },
    ]);
  } else {
    res.download(cssFile);
  }
});

app.listen(PORT);
