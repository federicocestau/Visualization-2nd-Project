from flask import Flask, render_template, redirect
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask import request
from sqlalchemy import create_engine

app = Flask(__name__)

# Database connection
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:Maneco707@localhost:5432/dealers'
app.config['JSON_SORT_KEYS'] = False
#engine = create_engine('postgresql://postgres:stacey@localhost:5432/dealers')
#connection = engine.connect()
#app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost/dealers'
db = SQLAlchemy(app)
migrate = Migrate(app, db)

  
class dealersModel(db.Model):
    __tablename__ = 'scraping'

    #dealer_id = db.Column(db.Integer, primary_key=True)
    abrand = db.Column(db.String(), primary_key=True)
    blogo = db.Column(db.String())
    dealer_description = db.Column(db.String())
    price = db.Column(db.String())
    cdealer_link = db.Column(db.String())

    def __init__(self, name, blogo, description, price, link):
        self.abrand = abrand
        self.blogo = blogo
        self.dealer_description = dealer_description
        self.price = price
        self.cdealer_link = cdealer_link

    def __repr__(self):
        return f"<dealer {self.abrand}>"


@app.route("/")
def hello():
    return {"hello": "world"}

if __name__ == '__main__':
    app.run(debug=True)

@app.route('/dealers', methods=['POST', 'GET'])
def handle_dealers():
    if request.method == 'POST':
        if request.is_json:
            data = request.get_json()
            new_dealer = dealersModel(name=data['name'], model=data['model'], doors=data['doors'])
            db.session.add(new_dealer)
            db.session.commit()
            return {"message": f"dealer {new_dealer.abrand} has been created successfully."}
        else:
            return {"error": "The request payload is not in JSON format"}

    if request.method == 'GET':
        dealers = dealersModel.query.all()
        results = [
            {
                #"id": dealer.dealer_id,
                "name": dealer.abrand,
                "blogo": dealer.blogo,
                "description":dealer.dealer_description,
                "price": dealer.price,
                "link": dealer.cdealer_link
            } for dealer in dealers]

        return {"count": len(results), "dealers": results}

if __name__ == '__main__':
    app.run(debug=True)