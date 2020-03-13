# /bin/bash

cpanm --installDeps --notest .
 
./script/compile_resources.sh

./admin/InitDb.pl --createdb --clean

plackup -Ilib -r