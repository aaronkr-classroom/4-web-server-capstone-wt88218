// router.js

"use strict";

const utils = require('./utils');

// Listing 7.6 p. 123-124

const httpStatus = require('http-status-codes'),
  contentTypes = require('./content-types'),
  routes = {
    GET:{},
    POST:{}
  }
  // POST 및 GET 요청에 매핑된 라우트를 저장할 routes 객체의 정의
// 라우트에 따른 콜백 함수를 처리하기 위한 함수 handle의 생성
exports.handle = (req, res) => {
  try {   
      routes[req.method][req.url](req, res);
  } catch(error) {
    console.log("error: " + error);
    res.writeHead(httpStatus.OK, contentTypes.html)
    utils.getFile("views/error.html", res);
  }
};

// main.js로부터 ro등록하기 위한 get 및 post 함수 생성
exports.get = (url, action) => {
  routes["GET"][url] = action;
};
exports.post = (url, action) => {
  routes["POST"][url] = action;
};