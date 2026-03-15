import { Analytics } from '@vercel/analytics/react';
import { useRouter } from "next/router";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { useEffect, useState } from "react";

import "@/styles/globals.css";

import { PreLoader } from "@/components/Loader";
import StarBackground from "@/components/StarBackground";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { GA_MEASUREMENT_ID, pageview } from "@/lib/gtag";

const APP_TITLE = "Portfolio | Harshit Arya";
const APP_DESCRIPTION =
	"Hello! I'm Harshit Arya, a passionate web developer and problem solver. Welcome to my portfolio";
const APP_AVATAR = "";
const APP_URL = "https://harshitarya.me";

export default function App({ Component, pageProps }) {
	const [loading, setLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		const timer = window.setTimeout(() => {
			setLoading(false);
		}, 3000);

		return () => window.clearTimeout(timer);
	}, []);

	useEffect(() => {
		if (loading) {
			document.body.style.overflowY = "hidden";
		} else {
			document.body.style.overflowY = "auto";
		}
	}, [loading]);

	useEffect(() => {
		if (!GA_MEASUREMENT_ID) {
			return undefined;
		}

		const handleRouteChange = (url) => {
			pageview(url);
		};

		handleRouteChange(router.asPath);
		router.events.on("routeChangeComplete", handleRouteChange);

		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.asPath, router.events]);

	return (
		<>
			{GA_MEASUREMENT_ID ? (
				<>
					<Script
						strategy="afterInteractive"
						src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
					/>
					<Script id="ga4-init" strategy="afterInteractive">
						{`
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							window.gtag = gtag;
							gtag('js', new Date());
							gtag('config', '${GA_MEASUREMENT_ID}', {
								send_page_view: false,
							});
						`}
					</Script>
				</>
			) : null}

			<Head>
				<title>{APP_TITLE}</title>
				<meta name="description" content={APP_DESCRIPTION} key="desc" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta property="og:title" content={APP_TITLE} />
				<meta property="og:site_name" content={APP_TITLE}></meta>
				<meta property="og:description" content={APP_DESCRIPTION} />
				<meta property="og:image" content={APP_AVATAR} />
				<meta property="og:image:width" content="612" />
				<meta property="og:image:height" content="612" />
				<meta property="og:url" content={APP_URL} />
				<meta property="og:type" content="website" />

				<meta property="twitter:image" content={APP_AVATAR} />
				<meta property="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content="" />
				<meta property="twitter:title" content={APP_TITLE} />
				<meta property="twitter:description" content={APP_DESCRIPTION} />

				<link rel="canonical" href={APP_URL} />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Person",
							name: "Harshit Arya",
							url: APP_URL,
							sameAs: [
								"https://github.com/Harshit-Arya-07",
								"https://www.linkedin.com/in/harshitarya7",
								"https://x.com/HarshitAry6327",
							],
							jobTitle: "Full Stack Developer",
							description: APP_DESCRIPTION,
						}),
					}}
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/assets/icons/favicon/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/assets/icons/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/assets/icons/favicon/favicon-16x16.png"
				/>
				<link
					rel="manifest"
					href="/assets/icons/favicon/site.webmanifest"
				/>
			</Head>

			<ThemeProvider attribute="class" defaultTheme="dark">
				<StarBackground />
				{/* Nebula depth blobs */}
				<div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden [contain:layout_paint_style]">
					<div className="absolute top-[8%] left-[3%] h-[520px] w-[520px] rounded-full bg-purple-600/6 blur-[130px] transform-gpu [will-change:transform]" />
					<div className="absolute top-[42%] right-[6%] h-[460px] w-[460px] rounded-full bg-blue-500/5 blur-[120px] transform-gpu [will-change:transform]" />
					<div className="absolute top-[75%] left-[18%] h-[560px] w-[560px] rounded-full bg-violet-500/5 blur-[145px] transform-gpu [will-change:transform]" />
				</div>
				<CursorGlow />
				<ScrollProgressBar />
				<div className="relative z-10 min-h-screen">
					<Component {...pageProps} loading={loading} />
				</div>
				<Analytics />
				{loading && <PreLoader />}
			</ThemeProvider>
		</>
	);
}
