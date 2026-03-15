import { BetaAnalyticsDataClient } from "@google-analytics/data";

const propertyId = process.env.GA_PROPERTY_ID;
const clientEmail = process.env.GA_CLIENT_EMAIL;
const privateKey = process.env.GA_PRIVATE_KEY?.replace(/\\n/g, "\n");
const reportStartDate = process.env.GA_REPORT_START_DATE || "2024-01-01";

let analyticsClient;

function getAnalyticsClient() {
  if (analyticsClient) {
    return analyticsClient;
  }

  analyticsClient = new BetaAnalyticsDataClient({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
  });

  return analyticsClient;
}

export default async function handler(req, res) {
  if (!propertyId || !clientEmail || !privateKey) {
    return res.status(503).json({
      totalVisitors: null,
      error: "Google Analytics visitor counter is not configured.",
    });
  }

  try {
    const client = getAnalyticsClient();
    const [report] = await client.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate: reportStartDate, endDate: "today" }],
      metrics: [{ name: "totalUsers" }],
    });

    const totalVisitors = Number(report.rows?.[0]?.metricValues?.[0]?.value || 0);

    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=3600");
    return res.status(200).json({ totalVisitors });
  } catch (error) {
    return res.status(500).json({
      totalVisitors: null,
      error: "Failed to fetch Google Analytics visitor count.",
      details: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
}