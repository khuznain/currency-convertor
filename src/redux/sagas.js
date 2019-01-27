// 1. Swap Currency
// 2. Change base currency
// 3. Upon initial app load
import { call, put, select, takeEvery } from "redux-saga/effects";
import {
  CHANGE_BASE_CURRENCY,
  CONVERSION_ERROR,
  CONVERSION_RESULT,
  GET_INITIAL_CONVERSION,
  SWAP_CURRENCY
} from "./actions/currencies";

const getLatestRate = currency =>
  fetch(`http://fixer.handlebarlabs.com/latest?base=${currency}`);

function* fetchLatestConversionRates(action) {
  try {
    let currency = action.currency;
    if (currency === undefined) {
      currency = yield select(state => state.currencies.baseCurrency);
    }
    const response = yield call(getLatestRate, currency);

    console.log(response);

    const result = yield response.json();

    console.log(result);

    if (result.error) {
      yield put({ type: CONVERSION_ERROR, error: result.error });
    } else {
      yield put({ type: CONVERSION_RESULT, result: result });
    }
  } catch (error) {
    console.log("error", error);
  }
}

export default function* rootSaga() {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
}
