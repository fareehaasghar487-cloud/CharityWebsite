import { configureStore } from "@reduxjs/toolkit";
import { donationApi } from "./slices/DonationApi";
import { campaignApi } from "./slices/CampaignApi";
import { statsApi } from "./slices/StatsApi";
import { summaryApi } from "./slices/SummaryApi";
import { userApi } from "./slices/UserApi";
import authReducer from "./slices/authSlice";
import { reportApi } from "./slices/ReportApi";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    [donationApi.reducerPath]: donationApi.reducer,
    [campaignApi.reducerPath]: campaignApi.reducer,
    [statsApi.reducerPath]: statsApi.reducer,
    [summaryApi.reducerPath]: summaryApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [reportApi.reducerPath]:reportApi.reducer,
   
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      donationApi.middleware,
      campaignApi.middleware,
      statsApi.middleware,
      summaryApi.middleware,
      userApi.middleware,
      reportApi.middleware,
    ),
});
