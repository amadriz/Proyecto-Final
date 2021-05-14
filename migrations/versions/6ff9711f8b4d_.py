"""empty message

Revision ID: 6ff9711f8b4d
Revises: 5b70939ad44d
Create Date: 2021-05-13 22:37:06.157247

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6ff9711f8b4d'
down_revision = '5b70939ad44d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('registro', sa.Column('email', sa.String(length=120), nullable=False))
    op.create_unique_constraint(None, 'registro', ['email'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'registro', type_='unique')
    op.drop_column('registro', 'email')
    # ### end Alembic commands ###