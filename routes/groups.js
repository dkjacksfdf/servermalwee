const Joi = require('joi');
const md5 = require('../utils/md5-pass');
const knl = require('../knl');
const securityConsts = require('../consts/security-consts');

knl.post('group', async(req, resp) => {
    const schema = Joi.object({
        produto : Joi.string().min(1).max(50).required(),
        descrição : Joi.string().min(10).max(200).required()
    })

    knl.validate(req.body, schema);

    const result = await knl.sequelize().models.grupo.findAll({
        where : {
            produto : req.body.produto
        }
    });

    knl.createException('0006', '', !knl.objects.isEmptyArray(result));
  ;

    const user = knl.sequelize().models.grupo.build({
        produto : req.body.produto,
        descrição : req.body.descrição
    });

    await user.save();
    resp.end();
}, securityConsts.USER_TYPE_PUBLIC);

knl.get('group', async(req, resp) => {
    const result = await knl.sequelize().models.grupo.findAll({
    });
    resp.send(result)
});

knl.put('group', async(req, resp) => {
    const result = await knl.sequelize().models.grupo.update({
        produto:req.body.produto,
        descrição:req.body.descrição,
        
    }, {
        where : {
        id : req.body.id
    }});
    
    resp.send(result);
});

knl.delete('group', async(req, resp) => {
        const result = await knl.sequelize().models.grupo.destroy({
            where : {
                id : req.body.id
            }
        });
        req.send(user);
});
