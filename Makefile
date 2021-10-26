args= 

prod_build:
	make clean
	sass css:public/assets
	gxib web --release
	mkdir dist
	cp target/.gxi/* dist/
	cp public/* dist/ -r
	sh ./uglify.sh

prod:
	sh ./check_git.sh
	git checkout prod
	git merge main
	make prod_build
	git add .
	git commit -m "auto-prod"
	git push
	make clean
	git checkout main

run: clean
	sass css:public/assets -w &	
	gxib web -p public -wrs localhost:8080 $(args)

clean:
	rm -rf dist
	rm -rf target/.gxi || true
	rm -rf public/assets/*.css*  || true
