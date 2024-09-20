import Home from "../components/home/Home";

export const metadata = {
  title: "Dawson Par",
  description: "Messing around with NextJS",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
