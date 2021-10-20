# cd ["your_project_path"]

now=$(date +'%m_%d_%Y')
timestamp=$(date +%s)

EXPO_ANDROID_KEYSTORE_PASSWORD=$1
EXPO_ANDROID_KEY_PASSWORD=$2

expoUsername=$3
expoPassword=$4
pathToYourJKS=$5
keystoreAlias=$6
target=$7

if [ "$target" == "apk" ]; then
    extension="apk"
else
    extension="aab"
fi

export EXPO_ANDROID_KEYSTORE_PASSWORD=$EXPO_ANDROID_KEYSTORE_PASSWORD
export EXPO_ANDROID_KEY_PASSWORD=$EXPO_ANDROID_KEY_PASSWORD


# expo publish

turtle setup:android

turtle build:android -t $target --username $expoUsername --password $expoPassword \
--keystore-path $pathToYourJKS --keystore-alias $keystoreAlias  \
-o ./expo-apps/android/$now/YOUR_APP_android_$timestamp.$extension

# If you don't use --public-url here^ I think it's better that you login to expo before
# starting the build (with expo login) and uncomment the "expo publish" line