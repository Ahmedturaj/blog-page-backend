
export const rootRouter = (app) => {
    app.use('/api/v1/user', auth.route.js)
    app.use('/api/v1/messages', messageRouter)
    app.use('/api/v1/visits', visitRouter)
    app.use('/api/v1/visits', visitClientRouter)
    app.use('/api/v1/visits', visitAdminRouter)
    app.use('/api/v1/visits/staff', visitStaffRouter)
    app.use('/api/v1/visits/issues', issuesRouter)
    app.use('/api/v1/notifications', notificationRouter)
    app.use('/api/v1/plans', planRouter)
    app.use('/api/v1/addsOnService', addsOnServiceRouter)
    app.use('/api/v1/discounts', discountRouter)
    app.use('/api/v1/payments', paymentRouter)
    app.use('/api/v1/admin', adminMatricsRouter)
    app.use('/api/v1/contactus', contactUSRouter)
}