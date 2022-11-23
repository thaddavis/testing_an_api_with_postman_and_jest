import { join } from "path";
import { parallel } from "async";
import { run } from "newman";
const PARALLEL_RUN_COUNT = 1;
const parametersForTestRun = {
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
};
const parallelCollectionRun = function (done) {
  run(parametersForTestRun, done);
};
let commands = [];
for (let index = 0; index < PARALLEL_RUN_COUNT; index++) {
  commands.push(parallelCollectionRun);
}
// Runs the Postman sample collection thrice, in parallel.
parallel(commands, (err, results) => {
  // eslint-disable-next-line no-undef
  err && console.error(err);
  results.forEach(function (result) {
    var failures = result.run.failures;
    // eslint-disable-next-line no-undef
    console.info(
      failures.length
        ? JSON.stringify(failures.failures, null, 2)
        : `${result.collection.name} ran successfully.`
    );
  });
});
