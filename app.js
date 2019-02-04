var fs = require('fs');

var fullNameFile = 'fullName.txt';
var singleNamefiles = ['firstName.txt', 'lastName.txt'];


singleNamefiles.forEach(function(e) {

    fs.readFile(e, function(err, data) {

            fs.appendFile('fullName.txt', data, (err) => {
                if (err) {
                    console.log('Error creating or adding content')
                }
                console.log('Added to ' + fullNameFile);
            });

        }

    );

});