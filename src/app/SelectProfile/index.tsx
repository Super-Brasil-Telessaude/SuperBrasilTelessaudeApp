import ButtonChoice from "@/src/components/ButtonChoice";
import ButtonPerson from "@/src/components/ButtonPerson";
import { useState } from "react";
import { View, Text, Image } from "react-native";

export default function SelectProfile() {

  const [selected, setSelected] = useState<'profissional' | 'paciente' | null>(null);

  const imageSource = selected === 'paciente'
  ? require("../../assets/images/pacienteImage.jpg")
  : selected === 'profissional'
  ? require("../../assets/images/doctorImage.jpg")
  : require("../../assets/images/personAndDoctor.jpg")


  return (
    <View className="flex-1 items-center justify-end">
      <View className="absolute center top-0  w-full h-3/4 ">
        <Image source={imageSource} className="w-full h-full" resizeMode="cover" />
      </View>
      <View className="bg-white w-full h-2/5 justify-center rounded-t-3xl items-center ">
        <Text className="text-3xl font-bold mb-7">
          Quem é você?
        </Text>

        <View className="gap-6">
          <View className="flex-row gap-10">
            <ButtonChoice
              title="Paciente"
              image={require("../../assets/images/personIcon.png")}
              isSelected={selected === 'paciente'}
              onPress={() => setSelected('paciente')} />

            <ButtonChoice
              title="Profissional"
              image={require("../../assets/images/doctorIcon.png")}
              isSelected={selected === 'profissional'}
              onPress={() => setSelected('profissional')}
            />
          </View>

          <ButtonPerson title="Continuar" />
        </View>
      </View>
    </View>
  );
}
