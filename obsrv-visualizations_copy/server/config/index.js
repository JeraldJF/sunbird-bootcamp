module.exports = {
    OBSRV_API_KEY: process.env.OBSRV_API_KEY || "Bearer xyz",
    OBSRV_API_HOST: process.env.OBSRV_API_HOST || "http://localhost:3000",
    OBSRV_DRUID_HOST: process.env.OBSRV_DRUID_HOST || "http://localhost:8888",
    PORT: process.env.PORT || 4000,
    DATASOURCE: process.env.DATASOURCE || "",
    SQL_QUERY: process.env.SQL_QUERY || ""
}