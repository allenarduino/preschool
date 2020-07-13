webpackHotUpdate("main",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: history, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "history", function() { return history; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav */ "./src/Nav.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home */ "./src/Home.js");
/* harmony import */ var history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! history/createBrowserHistory */ "./node_modules/history/createBrowserHistory.js");
/* harmony import */ var history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _InstructorSignup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InstructorSignup */ "./src/InstructorSignup.js");
/* harmony import */ var _InstructorLogin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./InstructorLogin */ "./src/InstructorLogin.js");
/* harmony import */ var _InstructorProfile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./InstructorProfile */ "./src/InstructorProfile.js");
/* harmony import */ var _CreateCourse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CreateCourse */ "./src/CreateCourse.js");
/* harmony import */ var _CreateQuiz__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CreateQuiz */ "./src/CreateQuiz.js");
/* harmony import */ var _SingleCourse__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SingleCourse */ "./src/SingleCourse.js");
/* harmony import */ var _Mycourses__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Mycourses */ "./src/Mycourses.js");
/* harmony import */ var _DisplayOne__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./DisplayOne */ "./src/DisplayOne.js");
/* harmony import */ var _EditProfile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./EditProfile */ "./src/EditProfile.js");
/* harmony import */ var _AddPdf__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./AddPdf */ "./src/AddPdf.js");
/* harmony import */ var _AddVideo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./AddVideo */ "./src/AddVideo.js");
/* harmony import */ var _AddQuestion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./AddQuestion */ "./src/AddQuestion.js");
/* harmony import */ var _DisplayTwo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./DisplayTwo */ "./src/DisplayTwo.js");
/* harmony import */ var _ViewVideos__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ViewVideos */ "./src/ViewVideos.js");
/* harmony import */ var _ViewPdfs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ViewPdfs */ "./src/ViewPdfs.js");
/* harmony import */ var _ViewQuestions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ViewQuestions */ "./src/ViewQuestions.js");
/* harmony import */ var _CourseDescription__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./CourseDescription */ "./src/CourseDescription.js");
/* harmony import */ var _EditCourse__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./EditCourse */ "./src/EditCourse.js");
/* harmony import */ var _SingleVideo__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./SingleVideo */ "./src/SingleVideo.js");
/* harmony import */ var _SinglePdf__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./SinglePdf */ "./src/SinglePdf.js");
var _jsxFileName = "/media/allen/SIMBAD/Flaskprojects/Preschool/design/preschool/Instructor_Teacher_Frontend/wap/src/App.js";


























const history = history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_4___default()();
history.listen((location, action) => {
  window.scrollTo(0, 0);
});
class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
      history: history,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 3
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 2
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: " container-fluid",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 2
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 4
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      exact: true,
      path: "/",
      component: _Home__WEBPACK_IMPORTED_MODULE_3__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 2
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/instructorlogin",
      component: _InstructorLogin__WEBPACK_IMPORTED_MODULE_6__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 2
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/instructorprofile",
      component: _InstructorProfile__WEBPACK_IMPORTED_MODULE_7__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 2
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/instructorsignup",
      component: _InstructorSignup__WEBPACK_IMPORTED_MODULE_5__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 2
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/createcourse",
      component: _CreateCourse__WEBPACK_IMPORTED_MODULE_8__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 2
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/createquiz",
      component: _CreateQuiz__WEBPACK_IMPORTED_MODULE_9__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 2
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/singlecourse/:id",
      component: _SingleCourse__WEBPACK_IMPORTED_MODULE_10__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 2
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/mycourses",
      component: _Mycourses__WEBPACK_IMPORTED_MODULE_11__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 2
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/display",
      component: _DisplayOne__WEBPACK_IMPORTED_MODULE_12__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 2
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/editprofile",
      component: _EditProfile__WEBPACK_IMPORTED_MODULE_13__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 2
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/addpdf/:id",
      component: _AddPdf__WEBPACK_IMPORTED_MODULE_14__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 2
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/addvideo/:id",
      component: _AddVideo__WEBPACK_IMPORTED_MODULE_15__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 2
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/addquestion/:id",
      component: _AddQuestion__WEBPACK_IMPORTED_MODULE_16__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 2
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/viewvideos/:id",
      component: _ViewVideos__WEBPACK_IMPORTED_MODULE_18__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 2
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/viewpdfs/:id",
      component: _ViewPdfs__WEBPACK_IMPORTED_MODULE_19__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 2
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/viewquestions/:id",
      component: _ViewQuestions__WEBPACK_IMPORTED_MODULE_20__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 2
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/coursedescription/:id",
      component: _CourseDescription__WEBPACK_IMPORTED_MODULE_21__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 2
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/editcourse/:id",
      component: _EditCourse__WEBPACK_IMPORTED_MODULE_22__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 2
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/singlevideo/:id",
      component: _SingleVideo__WEBPACK_IMPORTED_MODULE_23__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 2
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/singlepdf/:id",
      component: _SinglePdf__WEBPACK_IMPORTED_MODULE_24__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 2
      }
    })))));
  }

}

/***/ })

})
//# sourceMappingURL=main.6a131af685944f7c13b9.hot-update.js.map