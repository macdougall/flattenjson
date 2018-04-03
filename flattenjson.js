/**
 * @fileoverview Normalize JSON.
 * 
 * @package
 */
var jsonObj= {
  "firstName": "John",
  "lastName": "Adams",
  "id" : 4122,
  "address" : {
    "street": "500 Hancock St.", 
    "city": "Quinch", 
    "state": "MA", 
    "postalCode": "02169"
  }
  ,
  "contact" : 
  [ 
    {
      "mobile": "617-555-1212", 
    },
    {
      "home": "617-555-2000",
    },
    {
      "social" :
      [
        {
          "linkedin" : "https://www.linkedin.com/in/jadamsfoundingfather/",
          "twitter" : "@johnadamsfounddingfather",
          "email" : "johndams@foundingfathers.com",
          "medium" : "@johnadams",
          "github" : "https://www.github.com/jadamsfoundingfather"
        }
      ]
    }
  ]
}

/**
 * Flatten a nested (complex) JSON object down to normalized single entity.
 * Nested items become single entity with lineage.
 * @param {object} data JSON object/doc.
 */
const flattenJSON = (data) => {
  let r = {};
  function traverse(k, v) {
    if (k !== Object(k)) {
      r[v] = k;
    } else
    if (Array.isArray(k)) {
      for (i = 0, j = k.length; i < j; i++)
        traverse(k[i], v);
      if (j == 0)
        r[v] = [];
    } else {
      let empty = true;
      for (let entity in k) {
        empty = false;
        traverse (k[entity], v ? v + "." + entity : entity);
      }
      if (empty && v)
        r[v] = {};
    }
  }
  traverse (data, "");
  return r;
}

result = flattenJSON(jsonObj);
console.log("Object")
console.log("------------")
console.log(result);
console.log("JSON String")
console.log("------------")

