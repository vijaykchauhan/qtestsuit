<template>
  <div>
    <!-- <button @click="starts">Start</button> -->
    <h1 id="qunit-header">Load admin Company Details</h1>
    <!-- <h2 id="qunit-banner"></h2> -->
    <!-- <div id="qunit-testrunner-toolbar"></div> -->
    <!-- <h2 id="qunit-userAgent">ok</h2> -->
    <ol id="qunit-tests"></ol>
    <!-- <div id="qunit-fixture">test markup</div> -->
  </div>
</template>

<script>
import QUnit from "qunit";

function square(x) {
  return x * x;
}

var j = {
  glossary: {
    title: "example glossary",
    GlossDiv: {
      title: "S",
      GlossList: {
        GlossEntry: {
          ID: "SGML",
          SortAs: "SGML",
          GlossTerm: "Standard Generalized Markup Language",
          Acronym: "SGML",
          Abbrev: "ISO 8879:1986",
          GlossDef: {
            para:
              "A meta-markup language, used to create markup languages such as DocBook.",
            GlossSeeAlso: ["GML", "XML"]
          },
          GlossSee: "markup"
        }
      }
    }
  }
};

//TODO: rename of function to default name
var fstr = `function getValue(oj) {
  return oj.glossary.GlossDiv.GlossList.GlossEntry.GlossDef.GlossSeeAlso.length;
}`;

export default {
  methods: {
    starts() {
      QUnit.start();
    }
  },
  mounted() {
    QUnit.start();
    QUnit.module("group A");
    QUnit.test("Test example", function(assert) {
      assert.equal(
        new Function("oj", "return " + fstr + "(oj)")(j),
        "2",
        "Glossery is done"
      );
    });
    QUnit.module("group B");
    QUnit.test("square()", function(assert) {
      var result = square(2);
      assert.equal(result, 7, "square(2) equals 4");
    });
  }
};
</script>

<style lang="css" scoped></style>
