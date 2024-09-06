import Header from "@/components/Header";
import "./globals.css";
import { Poppins } from "next/font/google";
import MyAuth0Provider from "@/providers/MyAuth0Provider";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

const rubik = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Doctor Here",
  discription: "Health services providing web",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryProvider>
      <MyAuth0Provider>
        <html lang="en">
          <body className={rubik.className}>
            <main className="flex flex-col">
              <Header />
              <div className="flex-1">{children}</div>
            </main>
          </body>
        </html>
      </MyAuth0Provider>
    </ReactQueryProvider>
  );
};

export default RootLayout;
