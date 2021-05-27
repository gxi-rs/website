args = 
pwd = $(shell pwd)

build: clean
	gxib web $(args)

clean:
	rm -rf target/.gxi
	mkdir -p target/.gxi
	ln -s "$(pwd)/assets" target/.gxi/

