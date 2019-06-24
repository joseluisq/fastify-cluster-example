stress1:
	-echo "GET http://127.0.0.1:7300" \
		| vegeta -cpus=12 attack \
			-workers=10 -duration=60s -connections=10000 -rate=200 -http2=false \
		| tee results.bin | vegeta report
	-cat results.bin | vegeta plot > plot.html
.PHONY: stress

stress2:
	-autocannon -c 500 -d 5 -p 10 http://127.0.0.1:7300
.PHONY: stress
