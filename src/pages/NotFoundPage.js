import { Link } from "react-router-dom";
import { Container, Heading} from "@radix-ui/themes";

import Header from "../layout/Header";
import Footer from "../layout/Footer";

function NotFoundPage() {
  return (
    <div id="top" className="flex flex-col min-h-screen ">
      <Header />
      <Container size="3" classname="flex-1">
        <main className="min-h-[calc(75vh-8rem)] flex flex-col items-center justify-center gap-4">
          <Heading>Page Not Found</Heading>
          <div>
            Go Back or Go to <Link to="/" className="text-blue-500 hover:underline">Home Page</Link>
          </div>
          <img 
              src="/page-not-found.png"
              alt="404 Slime"
              className="w-64 h-auto mt-4"
          />
        </main>
      </Container>
      <Footer />
    </div>)
}

export default NotFoundPage;