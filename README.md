Kali API
========

The API layer for Kali, written in Node and Express.

## Dependencies

This project depends on kali-core.

## Setting up the project locally

First, `git clone` this repository to your machine, then `npm install` the dependencies.

### Defining the environment variables

Kali-API uses node-env for managing environment variables during testing; the environment configuration is not checked into source control. You'll need to create a file named `.env` in the root directory of the project and set the following variables for use in the app:

	DB_DATABASE={my_local_db_name}
	DB_HOSTNAME={my_local_db_hostname} // Usually localhost, could be remote
	DB_USERNAME={my_local_db_username}
	DB_PASSWORD={my_local_db_password}
	DB_DIALECT=postgres

	SSL_CERT_PATH={my_pfx_cert_path}
	SSL_PASSPHRASE={my_cert_passphrase}

	JWT_PRIVATE_PATH={my_private_rsa_key_path}
	JWT_PUBLIC_PATH={my_public_rsa_key_path}

Note that kali-core, as a dependency, will use the environment variables that you define in this project.

### Generating an SSL certificate

The local server uses https. For this, you'll need to generate a self-signed SSL certificate. On a Mac or Linux system, you can use OpenSSL to generate a PFX cert like so:

	my_local_machine:my_directory$ openssl genrsa 2048 > private.pem
	my_local_machine:my_directory$ openssl req -x509 -new -key private.pem -out public.pem
	my_local_machine:my_directory$ openssl pkcs12 -export -in public.pem -inkey private.pem -out mycert.pfx

You can do this in any directory you choose. After generating the certificates, point the `SSL_CERT_PATH` environment variable at its location on your filesystem, and specify the passphrase in `SSL_PASSPHRASE`.

### Generating the asymmetric key for JWT authentication

Authentication is handled using JSON Web Tokens, signed with an asymmetric key (RSA256 in this case). On a Mac or Linux system, you can use `ssh-keygen` to generate new RSA keys.

	ssh-keygen -b 2048 -t rsa -N '' -f {my_directory/my_key}

You'll have to convert the public key to PEM format.

	ssh-keygen -e -m PEM -f {my_directory/my_key} > outfile

After generating the keys, point the environment variables at the key locations on your filesystem.

### Starting the development server

After installing the dependencies, creating the certificate, and generating the JWT asymmetric keys, you're ready to go.

You can start the API server with `npm start`; alternatively, you can use a tool like nodemon or forever during development. By default, it will run at localhost:3000.

## Running the tests

Tests are handled with mocha and gulp. Use `gulp test` to run the unit tests. Right now, these don't exist, because I haven't gotten to them. (Bad, I know.)