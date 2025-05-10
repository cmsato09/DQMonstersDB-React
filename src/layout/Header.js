import { Container } from "@radix-ui/themes";
import Navbar from "../components/Navbar";

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <Container size="3">
        <div className="flex items-center space-x-10">
          <div className="text-xl font-bold hidden sm:block">
            DQ Monsters Database
          </div>
          <div className="text-xl font-bold sm:hidden">DQM</div>
          <Navbar />
        </div>
      </Container>
    </header>
  );
}

export default Header;
