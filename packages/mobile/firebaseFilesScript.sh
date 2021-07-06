echo "Platform : " $2
echo "Variant founded : " $1 
echo "Replacing google files..."

# ANDROID
if [ $2 = "android" ]
then
    if [[ $1 == *"Development"* ]]; then
        cp -f google-services/google-services-development.json ./google-services.json
    elif [[ $1 == *"Production"* ]]; then
        cp -f google-services/google-services-production.json ./google-services.json
    else
        echo "Setting dev by default"
        cp -f google-services/google-services-development.json ./google-services.json
    fi
fi

# IOS
if [ $2 = "ios" ]
then
    if [ $1 = "com.zerf.development" ]; then
        cp -f ${SRCROOT}/GoogleServices/GoogleService-Info-Development.plist ${SRCROOT}/GoogleService-Info.plist
    elif [ $1 = "com.zerf" ]; then
        cp -f ${SRCROOT}/GoogleServices/GoogleService-Info-Production.plist ${SRCROOT}/GoogleService-Info.plist
    else
        echo "Setting dev by default"
        cp -f ${SRCROOT}/GoogleServices/GoogleService-Info-Development.plist ${SRCROOT}/GoogleService-Info.plist
    fi
fi

echo "Replacing google files finished."
