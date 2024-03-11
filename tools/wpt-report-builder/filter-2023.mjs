/**
 * Copyright 2024 Google LLC.
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {LABELS_TO_TESTS} from './labelled-tests.mjs';

// The set of tests with the `chromium-bidi-2023` label.
// https://github.com/web-platform-tests/wpt-metadata/pull/5725
const RELEVANT_TESTS = LABELS_TO_TESTS.get('chromium-bidi-2023');

export const apply2023Filter = (reportData) => {
  const filteredResults = [];
  for (const result of reportData.results) {
    if (RELEVANT_TESTS.has(result.test)) {
      filteredResults.push(result);
    }
  }
  const filteredReportData = structuredClone(reportData);
  filteredReportData.results = filteredResults;
  filteredReportData.isFiltered = true;
  return filteredReportData;
};
