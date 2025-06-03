
import { CoffeeIcon, PackageIcon, ShoppingCartIcon, TimerIcon } from '@phosphor-icons/react';
import { ContainerHome, Content, Heading, Info } from './Styles';
import bgShort from "@/assets/images/hero-bg.svg"
import cafeDelivery from '@/assets/images/hero.svg'
import { useTheme } from 'styled-components';
export const Home = ( ) => {
  const theme = useTheme()
  return (

    <ContainerHome bgShort={bgShort}>
      <Content>
        <div>
            <Heading>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>

              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </Heading>

            <Info>
              <div>
                <ShoppingCartIcon
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors['yellow-dark'] }}
                />
                <span>Compra simples e segura</span>
              </div>

              <div>
                <PackageIcon
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors['base-text'] }}
                />
                <span>Embalagem mantém o café intacto</span>
              </div>

              <div>
                <TimerIcon
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors.yellow }}
                />
                <span>Entrega rápida e rastreada</span>
              </div>

              <div>
                <CoffeeIcon
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors.purple }}
                />
                <span>O café chega fresquinho até você</span>
              </div>
            </Info>
          </div>

          <img src={cafeDelivery} alt="Café do Coffee Delivery" />
      </Content>
    </ContainerHome>

  );
};

export default Home;