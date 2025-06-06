import ButtonPerson from "@/src/components/ButtonPerson";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import { View, Text, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

export default function Onboarding() {
  const sliderRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Bem-vindo à Super Brasil Telessaúde!",
      description:
        "Consultas médicas online, com segurança e praticidade, para todos os brasileiros. Conectamos médicos e pacientes com autonomia, rapidez e suporte.",
      image: require("../../assets/images/imgOnboarding01.png"),
    },
    {
      id: 2,
      title: "Você é médico? Atenda de onde quiser",
      description:
        "Escolha seus horários, receba por consulta, acesse prontuários digitais e atenda com respaldo técnico",
      image: require("../../assets/images/imgOnboarding02.png"),
    },
    {
      id: 3,
      title: "Você precisa de um médico? Estamos aqui por você.",
      description:
        "Marque sua consulta online em minutos. Escolha o especialista, o dia e pague com segurança.",
      image: require("../../assets/images/imgOnboarding03.png"),
    },
  ];

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      sliderRef.current?.goToSlide(currentIndex + 1, true);
    } else {
      router.replace('/SelectProfile')

    }
  }

  return (
    <View className="w-full h-full p-9">
      <AppIntroSlider
        ref={sliderRef}
        data={slides}
        onSlideChange={(index) => setCurrentIndex(index)}
        activeDotStyle={{
          backgroundColor: '#42AFAF',
          width: 30,
        }}
        renderNextButton={() => null}
        renderDoneButton={() => null}
        renderItem={({ item }) => {
          return (
            <View className="w-full h-full items-center justify-end relative">
              <View className="flex-1 justify-center items-center mt-40">
                <Image source={item.image} className="w-80 h-80" resizeMode="contain" />
              </View>

              <View className="py-20">
                <Text className="text-3xl font-extrabold">{item.title}</Text>
                <Text className="text-lg font-semibold text-gray-400 mt-4">
                  {item.description}
                </Text>
              </View>
            </View>
          );
        }}
      />

      <ButtonPerson onPress={handleNext} title={currentIndex === slides.length - 1 ? "Entrar" : "Próximo"} />
    </View>
  );
}
