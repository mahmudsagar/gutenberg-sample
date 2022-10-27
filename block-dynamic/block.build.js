(() => {
  // block.js
  var { __ } = wp.i18n;
  var { registerBlockType, RichText } = wp.blocks;
  registerBlockType(
    "gutenberg-blocks-sample/block-dynamic",
    {
      title: __("Dynamic Sum Block (Sample)"),
      icon: "universal-access-alt",
      category: "common",
      attributes: {
        number1: {
          type: "string"
        },
        number2: {
          type: "string"
        }
      },
      edit(props) {
        var number1 = props.attributes.number1;
        var number2 = props.attributes.number2;
        function onChangeNumber1(content) {
          props.setAttributes({ number1: content });
        }
        function onChangeNumber2(content) {
          props.setAttributes({ number2: content });
        }
        return /* @__PURE__ */ React.createElement("div", {
          id: "block-dynamic-box"
        }, " ", /* @__PURE__ */ React.createElement("h1", null, "Sample dynamic PHP server-side block"), /* @__PURE__ */ React.createElement("p", null, "This block will sum the numbers and render HTML on the server side"), /* @__PURE__ */ React.createElement("label", null, "Number 1:"), /* @__PURE__ */ React.createElement(RichText, {
          className: props.className,
          onChange: onChangeNumber1,
          value: number1,
          placeholder: "First number"
        }), /* @__PURE__ */ React.createElement("label", null, "Number 2:"), /* @__PURE__ */ React.createElement(RichText, {
          className: props.className,
          onChange: onChangeNumber2,
          value: number2,
          placeholder: "Second number"
        }));
      },
      save(props) {
        return null;
      }
    }
  );
})();
