import { ScrollView, StyleSheet } from 'react-native';
import Header from './src/Componentes/Header';
import Banner from './src/Componentes/Banner';
import CardMovie from './src/Componentes/CardMovie';
import Texts from './src/Componentes/Text';
import CardVideo from './src/Componentes/CardVideo';
import Footer from './src/Componentes/Footer';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Header/>
      <Banner/>
      <Texts/> 
      
      <ScrollView 
        horizontal={true} 
        style={styles.cardMovieContainer} 
        showsHorizontalScrollIndicator={false}
      >
        <CardMovie/>
        <CardMovie/>
        <CardMovie/>
        <CardMovie/>
      </ScrollView>

      <Texts/>
      <CardVideo/>
      <CardVideo/>
      <CardVideo/>
      <Footer/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardMovieContainer: {
    flexDirection: "row",
    marginLeft: 3,
    marginRight: 7,
    paddingVertical: 5,
  },
});
