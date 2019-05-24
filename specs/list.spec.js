var List = require('../src/List.js');
var Node = require('../src/Node.js')

describe('list', function () {
    describe('#constructor', function () {

        const list = new List();

        it('assigns null to this.head', () => {
            expect(list.head).to.equal(null);
        });

        it('assign 0 to this.length', () => {
            expect(list.length).to.equal(0);
        });
    })

    describe('#add', function () {

        const list = new List();

        it("inserts nodes to correct places", function () {
            list.add(new Node(1));
            list.add(new Node(2))
            expect(list.head).to.be.equal(1);
            expect(list.head.next).to.be.equal(2);

        });

        it('returns current size of list', function () {

            list.add(new Node(1));
            expect(list.length).to.be.equal(1);

            list.add(new Node(2));
            expect(list.length).to.be.equal(2);

        });
    });

    describe('#removeAt', function () {
    
        it('assigns null to list.head if remove single node', () => {

            const list = new List();

        list.add(new Node(1));

            list.removeAt(0);
            expect(list.head).to.equal(null);
        });

    })

    describe('#getAt', function () {

        const list = new List();

        nodes = [
            new Node(1),
            new Node(2),
            new Node(3),
            new Node(4)
        ];

        nodes.forEach(node => {
            list.add(node)
        });

        it('returns current value of this position', function () {
            let result = list.getAt(0);

            expect(result).to.equal(nodes[0]);
        })

        it('shold be return null for non-existent position', function () {
            let result = list.getAt(10);

            expect(result).to.equal(null);
        })

    });
    
    describe('#indexOf', function () {

        const list = new List();

        nodes = [
            new Node(1),
            new Node(2),
            new Node(3),
            new Node(4)
        ]

        nodes.forEach(node => {
            list.add(node)
        });

        it('returns current posititon of an existing list', function () {
            let result = list.indexOf(nodes[0]);
            expect(result).to.be.equal(0);
        })

        it('returns current posititon of an non-existing list', function () {
            let node = new Node(6);
            const result = list.indexOf(node);
            expect(result).to.equal(-1);
        })
    });
})