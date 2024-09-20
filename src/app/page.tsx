import Home from "../components/home/Home";

export const metadata = {
  title: "Dawson Par",
  description: "Messing around with NextJS",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
