import { Container } from '@radix-ui/themes';
import Navbar from '../components/Navbar';

function Header(){
  return (
    <header className="bg-gray-800 text-white p-4">
      <Container size="3">
          <div className="flex items-center space-x-10">
            <div className="text-xl font-bold">
              DQ Monsters Database
            </div>
            
            <Navbar />
          </div>
      </Container>
    </header>
  )
}

export default Header;