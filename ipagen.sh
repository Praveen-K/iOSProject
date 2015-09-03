cd /Users/GSPANN/Desktop/VMAppWithKonylib/gen/
perl extract.pl /Users/GSPANN/Jenkins/jobs/GitHubiOSBuild/workspace/iphone/konyappiphone.KAR
open ../VMAppWithKonylib.xcodeproj

cd /Users/GSPANN/Desktop/VMAppWithKonylib
xcodebuild -target "KRelease" -scheme "KRelease" -configuration Release

/usr/bin/xcrun -sdk iphoneos PackageApplication "/Users/GSPANN/Library/Developer/Xcode/DerivedData/VMAppWithKonylib-dximfjcrqiuxqdgiypafklnassdv/Build/Products/Debug-iphoneos/KonyIosApp.app" -o "/Users/GSPANN/Jenkins/jobs/GitHubiOSBuild/workspace/iphone/KonyIosApp.ipa"

echo "Ios .ipa has generated"

