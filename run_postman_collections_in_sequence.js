import { join } from "path";
import { eachSeries } from "async";
import { run } from "newman";
import { readdir, unlink } from "fs";

const directory = "newman";

readdir(directory, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    unlink(join(directory, file), (err) => {
      if (err) throw err;
    });
  }
});

const postmanCollections = [
  {
    collection: join(
      // eslint-disable-next-line no-undef
      __dirname,
      "postman/auth_flow_1__mock_password_reset.postman_collection.json"
    ), // your collection
    environment: join(
      // eslint-disable-next-line no-undef
      __dirname,
      "postman/localhost.postman_environment.json"
    ), //your env
    reporters: ["htmlextra", "json-summary", "cli"],
  },
  // {
  //   collection: path.join(
  //     __dirname,
  //     "postman/auth_flow_1__mock_password_reset.postman_collection.json"
  //   ),
  //   environment: path.join(
  //     __dirname,
  //     "postman/localhost.postman_environment.json"
  //   ),
  //   reporters: ["htmlextra", "json-summary", "cli"],
  // },
];

eachSeries(postmanCollections, function (collectionRunConfig, callback) {
  // eslint-disable-next-line no-undef
  console.log("collectionRunConfig", collectionRunConfig);
  run(collectionRunConfig, callback);
});
