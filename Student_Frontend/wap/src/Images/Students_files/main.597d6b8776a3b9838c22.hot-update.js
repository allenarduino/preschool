webpackHotUpdate("main",{

/***/ "./src/Mycourses.js":
/*!**************************!*\
  !*** ./src/Mycourses.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Mycourses_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Mycourses.css */ "./src/Mycourses.css");
/* harmony import */ var _Mycourses_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Mycourses_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Displays_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Displays.css */ "./src/Displays.css");
/* harmony import */ var _Displays_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Displays_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/media/allen/SIMBAD/Flaskprojects/Preschool/design/preschool/Student_Frontend/wap/src/Mycourses.js";



 //This class component is for students to view their enrolled courses

class Mycourses extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    this.check = () => {
      this.setState({
        shscourses: []
      });
      /*If we return empty courses, send the message 
      by changing the state
      */

      if (this.state.searched_courses.length === 0) {
        this.setState({
          message: true
        });
      }
    };

    this.search = () => {
      //Please look at this function at the top it's  very important
      this.check();
      this.setState({
        mycourses: []
      });
      const data = new FormData();
      data.append("name", this.state.name);
      fetch("http://127.0.0.1:5000/search_my_enrolled_courses", {
        method: "POST",
        headers: {
          Authorization: `${localStorage.getItem("student_token")}`
        },
        "Content-Type": "application/json",
        body: data
      }).then(res => res.json()).then(data => {
        this.setState({
          searched_courses: data
        }); //I did this because of testing in the console

        console.log(data);
      }).catch(err => console.log(err));
    };

    this.handleinput = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    this.unenroll = id => {
      if (window.confirm("Are you sure you want to unenroll in this course")) {
        fetch(`http://127.0.0.1:5000/un_enroll/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `${localStorage.getItem('student_token')}`
          }
        }).then(res => res.json()).then(data => {
          //alert(data)
          let courselist = this.state.mycourses;

          for (let i = 0; i < courselist.length; i++) {
            let p = courselist[i];

            if (p.id === id) {
              courselist.splice(i, 1);
              break;
            }
          }

          this.setState({
            mycourses: courselist
          });
        }).catch(err => console.log(err));
      }
    };

    this.state = {
      mycourses: [],
      searched_courses: [],
      message: false,
      name: "",
      loading: true
    };
  }
  /*Function to throw message if search result is empty and
  to set mycourses state to an empty array if the search 
  result is empty.This will throw an empty page with message
  */


  componentDidMount() {
    fetch("http://127.0.0.1:5000/my_enrolled_courses", {
      methods: "GET",
      "Content-Type": "application/json",
      headers: {
        Authorization: `${localStorage.getItem("student_token")}`
      }
    }).then(res => res.json()).then(data => {
      this.setState({
        mycourses: data,
        loading: false
      });
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        paddingTop: 150
      },
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "search-nav",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      value: this.state.name,
      name: "name",
      onChange: this.handleinput,
      onKeyUp: this.search,
      placeholder: "Search courses......",
      className: "search-input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 2
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "search-button",
      onClick: this.search,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 4
      }
    }, "Search")), this.state.searched_courses.length > 0 ? this.state.searched_courses.map(t => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "course-container  col-md-6 col-xl-4 col-sm-12 col-xs-12 col-lg-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "course-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "course-img",
      src: `http://127.0.0.1:5000${t.course_img}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 56
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "course-footer  col text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "course-name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 73
      }
    }, t.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: `singlecourse/${t.course_id}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 24
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "acess-butn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 65
      }
    }, "Acess")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: () => {
        this.unenroll(t.course_id);
      },
      className: "enroll-butn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 24
      }
    }, "Unenroll"))))) : null, this.state.loading == false ? this.state.mycourses.map(t => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "course-container  col-md-6 col-xl-4 col-sm-12 col-xs-12 col-lg-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "course-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "course-img",
      src: `http://127.0.0.1:5000${t.course_img}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 48
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "course-footer  col text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "course-name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 65
      }
    }, t.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: `singlecourse/${t.course_id}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "acess-butn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 58
      }
    }, "Acess")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: () => {
        this.unenroll(t.course_id);
      },
      className: "enroll-butn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 24
      }
    }, "Unenroll")))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        marginTop: 200
      },
      className: "col text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 70
      }
    }, this.state.message)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Mycourses);

/***/ })

})
//# sourceMappingURL=main.597d6b8776a3b9838c22.hot-update.js.map