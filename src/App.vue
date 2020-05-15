<template>
  <div>
    <input type="text" v-model="stud.name" />
    <button @click="check">Check</button>
    {{ name }}
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

// function square(x) {
//   return x * x;
// }

var j = {
  glossary: {
    title: "22",
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
          GlossSee: { name: "markup" }
        }
      }
    }
  }
};

//TODO: rename of function to default name

//var str1 = `oj.glossary.title~==~"22"~"title matched with example"`;
var str1 = `oj.glossary.title~==~22~"title matched with example"`;
// var fstr = `function qfunc(oj) {
//   return oj.glossary.GlossDiv.GlossList.GlossEntry.GlossSee[1];
// }`;
// var res = {
//   assertName: "Test",
//   comparatorDetails: { index: null, key: null, name: "equal", value: null },
//   keyName: "mqlResponse",
//   keyValue: null,
//   title: "Test1"
// };
export default {
  data() {
    return {
      stud: {
        name: {
          type: Object
        }
      }
    };
  },
  methods: {
    check() {
      // process.stdout.write(name);
      console.log(JSON.stringify(this.stud));
    },
    starts() {
      QUnit.start();
    }
  },
  mounted() {
    QUnit.start();
    // QUnit.module("group A");
    // QUnit.test("Test example", function(assert) {
    //   // j.glossary.GlossDiv.GlossList.GlossEntry.GlossSee deepequal {name:"markup"}
    //   assert.deepEqual(
    //     new Function("oj", "return " + fstr + "(oj)")(j),

    //     { name: "example" },
    //     "Glossery is done"
    //   );
    // });
    // QUnit.module("group B");
    // QUnit.test("square()", function(assert) {
    //   var result = square(2);
    //   assert.equal(result, 7, "square(2) equals 4");
    // });
    // QUnit.test("a test", function(assert) {
    //   assert.expect(1);

    //   function calc(x, operation) {
    //     return operation(x);
    //   }

    //   var result = calc(2, function(x) {
    //     assert.ok(true, "calc() calls operation function");
    //     return x * x;
    //   });

    //   assert.equal(result, 4, "2 squared equals 4");
    // });

    // QUnit.test("a test", function(assert) {
    //   assert.notEqual(
    //     1,
    //     "2",
    //     "String '2' and number 1 don't have the same value"
    //   );
    // });

    QUnit.module("Dynamic Test");
    QUnit.test("a test", function(assert) {
      let arr = str1.split("~");

      let funcCreation = `function qfunc(oj) {
  return ${arr[0]};
}`;
      console.log(typeof arr[2]);

      let expectedCreation = `function qfunc(oj) {
  try{
    if(oj.charAt(0) == '"') {
          return JSON.parse(oj)
        }else {
return oj;
        }
  }catch(e){
    return oj;
  }
}`;

      console.log(`${arr[0]}~${arr[1]}~${arr[2]}~${arr[3]}`);
      assert.strictEqual(
        new Function("oj", "return " + funcCreation + "(oj)")(j),

        new Function("oj", "return " + expectedCreation + "(oj)")(arr[2]),
        arr[3]
      );
    });
  }
};
</script>

<style lang="css" scoped></style>
