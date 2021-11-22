import mongoose from 'mongoose';
import { UserModel } from '../users/user.js';

const { Schema, model } = mongoose;

// interface Project {
// 	nombre: string;
// 	presupuesto: number;
// 	fechaInicio: Date;
// 	fechaFin: Date;
// 	estado: Enum_EstadoProyecto;
// 	fase: Enum_FaseProyecto;
// 	lider: Schema.Types.ObjectId;
// 	objetivos: [
// 		{
// 			descripcion: string;
// 			tipo: Enum_TipoObjetivo;
// 		}
// 	];
// }

const projectSchema =
	new Schema({
		nombre: {
			type: String,
			required: true,
		},
		presupuesto: {
			type: Number,
			required: true,
		},
		fechaInicio: {
			type: Date,
			required: true,
		},
		fechaFin: {
			type: Date,
			required: true,
		},
		estado: {
			type: String,
			enum: ['ACTIVO', 'INACTIVO'],
			default: 'INACTIVO',
		},
		fase: {
			type: String,
			enum: ['INICIADO', 'EN DESAROLLO', 'TERMINADO', 'NULO'],
			default: 'NULO',
		},
		lider: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: UserModel,
		},

		objetivos: [
			{
				descripcion: {
					type: String,
					required: true,
				},
				tipo: {
					type: String,
					enum: ['GENERAL', 'ESPECIFICO'],
					required: true,
				},
			},
		],
	});

const ProjectModel = model('Project', projectSchema);

export { ProjectModel };