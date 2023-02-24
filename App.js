import * as React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icone from 'react-native-vector-icons/Ionicons';


function Inicio({navigation}) { /* navigation - Será usado no futuro com o ativamento do menu */
  return (
      <ScrollView>
      <View style={estilo.cabecalho}>
      <TouchableOpacity>
      <Text style={estilo.textocabecalho}>Novidades</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={estilo.textocabecalho}>Promoções</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={estilo.textocabecalho}>Feminino</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={estilo.textocabecalho}>Masculino</Text>
      </TouchableOpacity>
  
      <TouchableOpacity style={estilo.botaologin}>
       <Text style={estilo.textocabecalho}>LOGIN</Text>
      </TouchableOpacity>
      </View>
      <View style={estilo.areaTitulo}>
        <Text style={estilo.textTitulo}>BAZZAR</Text>
      </View>

      <View style={{alignItems:'center'}}>
      <Image source={require('./src/imagens/imagemcapa.jpg')} style={estilo.imagemcapa}></Image>
      </View>

      <View style={{alignItems:'center'}}>
      <Image source={require('./src/imagens/itens.png')} style={estilo.imagemcapa}></Image>
      </View>

      <View style={estilo.rodape}>
    
    <View>
        <Text style={{color:'black', fontSize: 14,}}>Siga nos:</Text>
      <View style={estilo.arearedes}>
        <TouchableOpacity>
        <Image source={require('./src/imagens/whats.png')} style={estilo.redessociais}></Image>
        </TouchableOpacity>
        
        <TouchableOpacity>
        <Image source={require('./src/imagens/facebook.png')} style={estilo.redessociais}></Image>
        </TouchableOpacity>
        
        <TouchableOpacity>
        <Image source={require('./src/imagens/instagram.png')} style={estilo.redessociais}></Image>
        </TouchableOpacity>

        <TouchableOpacity>
        <Image source={require('./src/imagens/twitter.png')} style={estilo.redessociais}></Image>
        </TouchableOpacity>
      
      </View>
    </View>
    </View>
      </ScrollView>
  );
}

function Categoria({navigation}) {
  return (
<ScrollView>
<View style={estilo.areaTitulo}>
          <Text style={estilo.destaque}>PRODUTOS</Text>
        </View>
      
      <Text style={estilo.textoModa}>Moda Feminina</Text>

      <View style={estilo.areaGaleria}>
          <TouchableOpacity onPress={() => navigation.navigate('Bolsa')}>
              <Image source={require('./src/imagens/modafeminina1.jpg')} style={estilo.imagemGaleria}></Image>
            <View style={{alignItems:'center'}}>
              <Text style={estilo.textProdutos}>Bolsa</Text>
              <Text style={estilo.textProdutos}>R$ 85,50</Text>
            </View>
          </TouchableOpacity>
       
          <TouchableOpacity onPress={() => navigation.navigate('Vestido')}>
              <Image source={require('./src/imagens/modafeminina2.jpg')} style={estilo.imagemGaleria}></Image>
            <View style={{alignItems:'center'}}>
              <Text style={estilo.textProdutos}>Vestido</Text>
              <Text style={estilo.textProdutos}>R$ 325,50</Text>
            </View>
          </TouchableOpacity>
       </View>

        <View style={estilo.areaGaleria}>

          <TouchableOpacity onPress={() => navigation.navigate('Chapéu')}>
              <Image source={require('./src/imagens/modafeminina3.jpg')} style={estilo.imagemGaleria}></Image>
            <View style={{alignItems:'center'}}>
              <Text style={estilo.textProdutos}>Chapéu</Text>
              <Text style={estilo.textProdutos}>R$ 65,50</Text>
            </View>
          </TouchableOpacity>
       
          <TouchableOpacity onPress={() => navigation.navigate('Blusa')}>
              <Image source={require('./src/imagens/modafeminina4.jpg')} style={estilo.imagemGaleria}></Image>
            <View style={{alignItems:'center'}}>
              <Text style={estilo.textProdutos}>Blusa</Text>
              <Text style={estilo.textProdutos}>R$ 85,50</Text>
            </View>
          </TouchableOpacity>
        </View>

  <Text style={estilo.textoModa}>Moda Masculina</Text>

  <View style={estilo.areaGaleria}>
     
      <TouchableOpacity onPress={() => navigation.navigate('Boné')}>
          <Image source={require('./src/imagens/modamasculina1.jpg')} style={estilo.imagemGaleria}></Image>
          <View style={{alignItems:'center'}}>
            <Text style={estilo.textProdutos}>Boné</Text>
            <Text style={estilo.textProdutos}>R$ 85,50</Text>
          </View>
      </TouchableOpacity>
     
      <TouchableOpacity onPress={() => navigation.navigate('Terno')}>
          <Image source={require('./src/imagens/modamasculina2.jpg')} style={estilo.imagemGaleria}></Image>
          <View style={{alignItems:'center'}}>
            <Text style={estilo.textProdutos}>Terno</Text>
            <Text style={estilo.textProdutos}>R$ 485,50</Text>
          </View>
      </TouchableOpacity>
  </View>

    <View style={estilo.areaGaleria}>

      <TouchableOpacity onPress={() => navigation.navigate('Moleton')}>
          <Image source={require('./src/imagens/modamasculina3.jpg')} style={estilo.imagemGaleria}></Image>
          <View style={{alignItems:'center'}}>
            <Text style={estilo.textProdutos}>Moleton</Text>
            <Text style={estilo.textProdutos}>R$ 125,50</Text>
          </View>
      </TouchableOpacity>
     
      <TouchableOpacity onPress={() => navigation.navigate('Bota')}>
          <Image source={require('./src/imagens/modamasculina4.jpg')} style={estilo.imagemGaleria}></Image>
          <View style={{alignItems:'center'}}>
            <Text style={estilo.textProdutos}>Bota</Text>
            <Text style={estilo.textProdutos}>R$ 125,25</Text>
          </View>
      </TouchableOpacity>
    </View>

</ScrollView>
 
  );
}

function SobreLoja() {
  return (
  <ScrollView>
    <View style={estilo.areaTitulo}>
        <Text style={estilo.textTitulo}>BAZZAR</Text>
      </View>
    <View style={estilo.areaGaleria}>
      <View style={estilo.bemvindo}>
        <Text style={estilo.textbemvindo}>Bem Vindo ao BAZZAR</Text>
        <Text style={{fontSize: 18, marginTop:12}}>Nossos produtos são inspirados pelas pessoas que estão a nossa volta, 
        com suas belezas e qualidades.
        Produtos de bom gosto especialmente para você.
         Descubra ouy story e aproveite as promoções.</Text>
      </View>
    </View>
    <Image source={require('./src/imagens/lojafisica.jpg')} style={estilo.fotobemvindo}></Image>

  <View style={estilo.areaGaleria2}>
        <Image source={require('./src/imagens/mapa.png')} style={estilo.fotobemvindo}></Image>

      <View style={estilo.bemvindo2}>
          <Text style={estilo.textbemvindo}>Rua das Orquideas, Nº 125</Text>
          <Text style={estilo.textbemvindo}>Bairro: Vila Mariana</Text>
          <Text style={estilo.textbemvindo}>São Paulo - SP</Text>
          <Text style={estilo.textbemvindo}>CEP: 0125-010</Text>
      </View>
   </View>

  <View style={estilo.rodape}>
    
    <View>
        <Text style={{color:'black', fontSize: 14,}}>Siga nos:</Text>
      <View style={estilo.arearedes}>
        <TouchableOpacity>
        <Image source={require('./src/imagens/whats.png')} style={estilo.redessociais}></Image>
        </TouchableOpacity>
        
        <TouchableOpacity>
        <Image source={require('./src/imagens/facebook.png')} style={estilo.redessociais}></Image>
        </TouchableOpacity>
        
        <TouchableOpacity>
        <Image source={require('./src/imagens/instagram.png')} style={estilo.redessociais}></Image>
        </TouchableOpacity>

        <TouchableOpacity>
        <Image source={require('./src/imagens/twitter.png')} style={estilo.redessociais}></Image>
        </TouchableOpacity>
      
      </View>
    </View>
  </View>
</ScrollView>
  );
}

function Cartoes() {
  return (
    <View style={{marginTop: 1, justifyContent:'space-around'}}>
      
      <View style={estilo.areaTitulo}>
        <Text style={estilo.textTitulo}>BAZZAR</Text>
      </View>

      <View style={{alignItems:'center'}}>
       <Text style={{color:'black', fontSize: 30}}>FORMAS DE PAGAMENTO</Text>
      </View>

        <View style={estilo.areaCartoes}>
          <Image source={require('./src/imagens/MasterCard.png')}></Image>
          <Image source={require('./src/imagens/Amex.png')}></Image> 
        </View>

        <View style={estilo.areaCartoes}>
          <Image source={require('./src/imagens/Visa.png')}></Image>
          <Image source={require('./src/imagens/BoletoBancario.png')}></Image> 
        </View>

        <View style={estilo.areaCartoes}>
          <Image source={require('./src/imagens/Elo.png')}></Image>
          <Image source={require('./src/imagens/Hipercard.png')}></Image>
        </View>

        <View style={estilo.areaCartoes}>
          <Image source={require('./src/imagens/PIX.png')}></Image>
          <Image source={require('./src/imagens/MercadoPago.png')}></Image>
        </View>

        <View style={estilo.areaCartoes}>
          <Image source={require('./src/imagens/diners.png')}></Image>
          <Image source={require('./src/imagens/PayPal.png')}></Image>
        </View>

    </View>
  );
}


  function Bolsa() {
    return (
      <View style={{ flex: 1, alignItems: 'center', marginTop: 15,}}>
        
          <Image source={require('./src/imagens/modafeminina1.jpg')} style={estilo.imagemDetalhe}></Image>
          <View style={{marginTop:25, marginLeft:70, marginRight: 70}}>
          <Text style={estilo.textTitulo}>BOLSA</Text>
          <Text style={{marginTop:10}}>Bolsa shopping grande vermelha. O modelo tem formato estruturado e acabamento liso e acetinado. 
          Traz duas alças de ombro e fecho superior em zíper e puxador. Acompanha bag charm removível em formato envelope, que 
          funciona também como necessaire e bolsa de mão, preso à alça por tira.
          </Text>
          <Text style={estilo.textProdutos2}>R$ 85,50</Text>
        </View>
      </View>
    );
  }

  function Vestido() {
    return (
      <View style={{ flex: 1, alignItems: 'center', marginTop: 15,}}>
        
        <Image source={require('./src/imagens/modafeminina2.jpg')} style={estilo.imagemDetalhe}></Image>
        <View style={{marginTop:25, marginLeft:70, marginRight: 70}}>
        <Text style={estilo.textTitulo}>VESTIDO</Text>
        <Text style={{marginTop:10}}>Vestido confeccionado em tecido de viscose. 
        A Viscose é um tecido plano ideal para dias quentes pois é fresco e soltinho. 
        O Vestido Heloisa possui alça de largura média, detalhe de amarração nas costas e estampa em poá. 
        Impossível não se apaixonar.
        Esta peça faz parte da nossa linha de verão. São itens essenciais e versáteis que podem ser coordenados 
        entre si e combinam com todo seu guarda-roupa.
        </Text>
        <Text style={estilo.textProdutos2}>R$ 325,50</Text>
        </View>
      </View>
    );
  }

  function Chapeu() {
    return (
      <View style={{ flex: 1, alignItems: 'center', marginTop: 15,}}>
        
        <Image source={require('./src/imagens/modafeminina3.jpg')} style={estilo.imagemDetalhe}></Image>
        <View style={{marginTop:25, marginLeft:70, marginRight: 70}}>
        <Text style={estilo.textTitulo}>CHAPÉU</Text>
        <Text style={{marginTop:10}}>O Chapéu de praia proteje o rosto e o couro cabeludo contra queimaduras, manchas
        ressecamentos, além de ser confortável e estiloso.
        </Text>
        <Text style={estilo.textProdutos2}>R$ 65,50</Text>
        </View>
      </View>
    );
  }

  function Blusa() {
    return (
      <View style={{ flex: 1, alignItems: 'center', marginTop: 15,}}>
        
        <Image source={require('./src/imagens/modafeminina4.jpg')} style={estilo.imagemDetalhe}></Image>
        <View style={{marginTop:25, marginLeft:70, marginRight: 70}}>
        <Text style={estilo.textTitulo}>Blusa</Text>
        <Text style={{marginTop:10}}>Blusão Básico Feminino de Moletom Oversized com Capuz é desenvolvido em malha 
        de algodão 100% peluciado com cavas levemente deslocadas e capuz. Modelagem oversized, caimento mais solto 
        junto ao corpo, mais largo e confortável que outras modelagens. Combine com calças mais justas e monte looks 
        estilosos e modernos. Possui também bolsos laterais e cordel com ponteira em nó com acabamento emborrachado 
        na cor da peça. 
        Agora é só complementar com uma calça Hering e arrasar no look!
        </Text>
        <Text style={estilo.textProdutos2}>R$ 85,50</Text>
        </View>
      </View>
    );
  }

  function Bone() {
    return (
      <View style={{ flex: 1, alignItems: 'center', marginTop: 15,}}>
        
        <Image source={require('./src/imagens/modamasculina1.jpg')} style={estilo.imagemDetalhe}></Image>
        <View style={{marginTop:25, marginLeft:70, marginRight: 70}}>
        <Text style={estilo.textTitulo}>BONÉ</Text>
        <Text style={{marginTop:10}}>- Modelo : Americano - Material : Brim 100% Algodão - 
        Ajuste : Fitão com regulador e embutidor metálico  - Tamanho : 58 cm (com regulador +/- 4 cm)  
        - Tamanho da Aba : 18 cm x 7 cm  - Largura : 17 cm  - Altura : 13 cm  
        - Aba : Semi-Curva com 6 costuras - Gênero : Masculino e Feminino
        </Text>
        <Text style={estilo.textProdutos2}>R$ 85,50</Text>
        </View>
      </View>
    );
  }

  function Terno() {
    return (
      <View style={{ flex: 1, alignItems: 'center', marginTop: 15,}}>
        <Image source={require('./src/imagens/modamasculina2.jpg')} style={estilo.imagemDetalhe}></Image>
        <View style={{marginTop:25, marginLeft:70, marginRight: 70}}>
        <Text style={estilo.textTitulo}>TERNO</Text>
        <Text style={{marginTop:10}}>Projetado com gola virada, este terno masculino é muito formal e é adequado para ocasiões de negócios.
        Com cor sólida e design de fecho de botão, este conjunto de terno fino é elegante e bonito.
        Feito de material de mistura de algodão de alta qualidade, o conjunto de terno é macio, respirável e confortável de usar.
        Existem seis tamanhos para sua escolha, incluindo M, G, GG, 2GG, 3GG, 4GG.
        Você pode usar este conjunto de terno em casamentos, formaturas, encontros, escritórios, etc.
        </Text>
        <Text style={estilo.textProdutos2}>R$ 485,50</Text>
        </View>
      </View>
    );
  }

  function Moleton() {
    return (
      <View style={{ flex: 1, alignItems: 'center', marginTop: 15,}}>
        <Image source={require('./src/imagens/modamasculina3.jpg')} style={estilo.imagemDetalhe}></Image>
        <View style={{marginTop:25, marginLeft:70, marginRight: 70}}>
        <Text style={estilo.textTitulo}>MOLETON</Text>
        <Text style={{marginTop:10}}>Moleton Capuz Pré Historic Agasalho Blusa De Frio Canguru TropiCaos BrasilNossa empresa 
        surgiu a mais de 20 anos de um trabalho porta a porta e se consolidou na cidade de Franca SP. Entregamos diariamente 
        mais de 400 produtos incluindo vendas virtuais e atendimento residencial além das lojas físicas. Acreditamos no 
        vínculo, amizade, respeito, parceria e proximidade com nossos clientes, e por isso consideramos esse círculo uma 
        FAMÍLIA.Sobre a nossa marca: TropiCaosInspirada no movimento cultural Tropicália desenvolvemos nossa marca com o 
        intuito de trazer movimento, cores, personalidade e liberdade.
        </Text>
        <Text style={estilo.textProdutos2}>R$ 125,50</Text>
        </View>   
      </View>
    );
  }

  function Bota() {
    return (
      <View style={{ flex: 1, alignItems: 'center', marginTop: 15,}}>
        <Image source={require('./src/imagens/modamasculina4.jpg')} style={estilo.imagemDetalhe}></Image>
        <View style={{marginTop:25, marginLeft:70, marginRight: 70}}>
        <Text style={estilo.textTitulo}>BOTA</Text>
        <Text style={{marginTop:10}}>Faça suas trilhas e caminhadas em terreno acidentado com a Bota Naja Extreme 205. 
        Essa bota de aventura é confeccionada em material resistente e durável, sem deixar o conforto de lado. O cabedal 
        robusto protege contra pedregulhos, com tira de fácil calce, forro acolchoado e lingueta em tecido para auxiliar 
        na respirabiliade. A entressola em eva permite maciez e o solado em borracha tratorada permite segurança e aderência 
        ao solo. Peça já sua bota Extreme e mostre seu potencial na natureza!
        </Text>
        <Text style={estilo.textProdutos2}>R$ 125,25</Text>
        </View>
      </View>
    );
  }

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TelaProdutos() {
  return (
      <Stack.Navigator>
      <Stack.Screen name="Categoria" component={Categoria}/>
        <Stack.Screen name="Bolsa" component={Bolsa} />
        <Stack.Screen name="Vestido" component={Vestido} />
        <Stack.Screen name="Chapéu" component={Chapeu} />
        <Stack.Screen name="Blusa" component={Blusa} />
        <Stack.Screen name="Boné" component={Bone} />
        <Stack.Screen name="Terno" component={Terno} />
        <Stack.Screen name="Moleton" component={Moleton} />
        <Stack.Screen name="Bota" component={Bota} />
      </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Inicio" component={Inicio} options={{tabBarIcon: ({color, size})=>(<Icone name ="home" color={color} size={size}/>)}} />
        <Tab.Screen name="Categoria" component={TelaProdutos} options={{tabBarIcon: ({color, size})=>(<Icone name ="ios-shirt" color={color} size={size}/>)}} />
        <Tab.Screen name="Sobre a Loja" component={SobreLoja} options={{tabBarIcon: ({color, size})=>(<Icone name ="information-circle-sharp" color={color} size={size}/>)}} />
        <Tab.Screen name="Cartoes" component={Cartoes} options={{tabBarIcon: ({color, size})=>(<Icone name ="ios-card" color={color} size={size}/>)}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

const estilo = StyleSheet.create({

  fotobemvindo:{
    width: 180,
    height: 180,
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 150,
    borderColor:'black',
    borderWidth: 1,

  },

  textProdutos2:{
    fontFamily: 'IM FELL Great Primer',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    color: '#000000',
    marginTop: 10,
    },

  bemvindo:{
    width: 380,
    height: 150,
    marginTop: 5,
  },

  textbemvindo:{
    fontFamily: 'IM FELL Great Primer',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000000',
    textAlign: 'center',
  },

  arearedes:{
      flex: 1,
      flexDirection: 'row',
      marginTop: 10, 
      
  },

  redessociais:{
    width: 30,
    height: 30,
    marginLeft:70,
    },

  cabecalho:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#755F5F',
    height:38,
    justifyContent: 'center', 
  },

  textocabecalho:{
    fontFamily: 'Inter',
    fontsize: 12,
    color: 'white',
    padding: 10,
  },

  botaologin:{
    width: 68,
    height: 17,
    backgroundColor: 'linear-gradient(180deg, rgba(189, 50, 6, 0.71) 99.99%, rgba(217, 217, 217, 0) 100%)',
    borderRadius: 15,
    padding: 10,
    marginTop: 10,
    marginLeft: 30,
    textAlign:'center',
  },

  textologin:{
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 8,
    color:'white',
  },

  textTitulo:{
   fontFamily: 'IM FELL Great Primer',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: 36,
  color: 'black',
  marginTop:25,
  },

  areaTitulo:{
    justifyContent:'center',
    alignItems:'center',
    marginTop: 2,
    
  },  

imagemcapa:{
  width: 430,
  height: 270,
  borderRadius: 5,
  marginTop: 25,
},

destaque:{
  fontFamily: 'IM FELL Great Primer',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: 25,
  textDecorationLine: 'underline',
  textTransform: 'uppercase',
  color: '#000000',
},

textoModa:{
  fontFamily: 'IM FELL Great Primer',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: 16,
  textDecorationLine: 'underline',
  color: '#000000',
  marginLeft: 35,
  marginTop: 30,
},

areaGaleria:{
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginTop: 25,
},

areaGaleria2:{
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginTop: 25,
  marginLeft: 45,
},

bemvindo2:{
  width: 600,
  height: 150,
  marginTop: 55,
  marginLeft:150,
  
},

areaCartoes:{
  flex: 1,
  flexDirection: 'row',
  padding:50,
  justifyContent:'space-around',
},

imagemGaleria:{
width: 100,
height: 150,
borderRadius: 5,
},

imagemDetalhe:{
  width: 200,
  height: 250,
  borderRadius: 5,
  },

textProdutos:{
fontFamily: 'IM FELL Great Primer',
fontStyle: 'normal',
fontWeight: 'bold',
fontSize: 12,
lineHeight: 15,
textAlign: 'center',
color: '#000000',
},

rodape:{
flex: 1,
flexDirection: 'row',
height: 64,
backgroundColor: '#A9A9A9',
justifyContent: 'space-between',
margin: 10,
},



  }

)