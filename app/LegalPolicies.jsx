import { View, Text, ScrollView } from "react-native";
import React from "react";

export default function LegalPolicies() {
  return (
    <ScrollView>
      <View style={{ padding: 25, gap: 20 }}>
        <View style={{ gap: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "600" }}>Terms</Text>
          <Text style={{ fontSize: 16, color: "grey" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare
            quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien,
            consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam
            est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare
            quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien,
            consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam
            est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.
          </Text>
        </View>

        <View style={{ gap: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "600" }}>
            Changes to the Service and/or{"\n"}Terms:
          </Text>
          <Text style={{ fontSize: 16, color: "grey" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare
            quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien,
            consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam
            est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare
            quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien,
            consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam
            est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare
            quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien,
            consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam
            est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
