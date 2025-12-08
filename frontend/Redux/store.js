import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { userApi } from './slices/UserApi'
import { campaignApi } from './slices/CampaignApi'

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
         [campaignApi.reducerPath]: campaignApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware),

})