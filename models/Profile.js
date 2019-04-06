

const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    handle:{
        type: String,
        required: true
    },
    company:{
        type: String
    },
    website:{
        type: String
    },
    status:{
        type: String,
        required: true
    },
    skills:{
        type: [String],
        required: true
    },
    bio:{
        type: String,
    },
    githubusername:{
        type: String
    },
    experience:[
        {
            title:{
                type: String,
                required: true
            },
            company:{
                type: String,
                required: true
            },
            location:{
                type: String
            },
            from:{
                type: Date,
                required: true
            },
            to:{
                type: Date,
            },
            current:{
                type: Boolean,
                default: false
            },
            description:{
                type: String
            }
        }
    ],
    education:[
        {
            school:{
                type: String,
                required: true
            },
            degree:{
                type: String,
                required: true
            },
            fieldOfStudy:{
                type: String,
                required: true
            },
            from:{
                type: Date,
                required: true
            },
            to:{
                type: Date,
            },
            current:{
                type: Boolean,
                default: false
            },
            description:{
                type: String
            }
        }
    ],
    social:{
        gmail:{
            type: String
        },
        facebook:{
            type: String
        },
        twitter:{
            type: String
        },
        youtube:{
            type: String
        }
    },
    date:{
        type: Date,
        default: Date.now
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
});

const Profile = mongoose.model('profiles', profileSchema);
module.exports = Profile;