set -e

mongo --port $MONGO_PORT<<EOF
use $MONGO_INITDB_DATABASE

db.createUser({
  user: '$MONGODB_USERNAME',
  pwd:  '$MONGODB_PASSWORD',
  roles: [{
    role: 'readWrite',
    db: '$MONGO_INITDB_DATABASE'
  }]
})
EOF